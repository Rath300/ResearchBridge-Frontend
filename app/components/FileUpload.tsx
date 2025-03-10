'use client';

import { useState, useCallback } from 'react';
import { api, APIError } from '@/app/utils/api';

interface FileUploadProps {
  projectId: string;
  onSuccess?: (data: any) => void;
  onError?: (error: APIError) => void;
  allowedTypes?: string[];
  maxSize?: number; // in bytes
}

interface UploadResponse {
  url: string;
  key: string;
  filename: string;
}

export default function FileUpload({
  projectId,
  onSuccess,
  onError,
  allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif'],
  maxSize = 5 * 1024 * 1024 // 5MB default
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): string | null => {
    if (!allowedTypes.includes(file.type)) {
      return `Invalid file type. Allowed types: ${allowedTypes.join(', ')}`;
    }

    if (file.size > maxSize) {
      return `File too large. Maximum size: ${Math.round(maxSize / 1024 / 1024)}MB`;
    }

    return null;
  };

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset states
    setError(null);
    setProgress(0);

    // Validate file
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      if (onError) {
        onError({ message: validationError, code: 'VALIDATION_ERROR' });
      }
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('projectId', projectId);
      formData.append('title', file.name);

      const data = await api.upload<UploadResponse>(
        '/api/collaboration/documents/upload',
        formData,
        (progress) => setProgress(Math.round(progress))
      );

      if (onSuccess) {
        onSuccess(data);
      }
    } catch (err) {
      const error = err as APIError;
      setError(error.message);
      if (onError) {
        onError(error);
      }
    } finally {
      setUploading(false);
      // Reset the input
      event.target.value = '';
    }
  }, [projectId, allowedTypes, maxSize, onSuccess, onError]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="relative cursor-pointer">
          <input
            type="file"
            onChange={handleFileUpload}
            disabled={uploading}
            accept={allowedTypes.join(',')}
            className="hidden"
          />
          <div className={`px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 transition-colors ${
            uploading ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
          }`}>
            {uploading ? 'Uploading...' : 'Choose File'}
          </div>
        </label>

        {uploading && (
          <div className="flex-1 max-w-xs">
            <div className="h-2 bg-gray-200 rounded overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">{progress}% uploaded</p>
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <p className="text-sm text-gray-500">
        Allowed types: {allowedTypes.map(type => type.split('/')[1]).join(', ')}
        <br />
        Maximum size: {Math.round(maxSize / 1024 / 1024)}MB
      </p>
    </div>
  );
} 