import { FC, useEffect } from 'preact/compat';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'react-feather';

interface FileDropzoneProps {
    onFileUpload?: (files: File[]) => void;
}

const FileDropzone: FC<FileDropzoneProps> = ({ onFileUpload }) => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            onFileUpload(acceptedFiles as File[]);
        }
    }, [acceptedFiles, onFileUpload]);

    return (
        <div className="flex items-center justify-center w-full border-2 rounded-md border-gray-200 border-dashed">
            <input />
            <div className="flex items-center justify-center gap-6 p-7 cursor-pointer w-full">
                <span className="text-gray-200"><UploadCloud size={60} /></span>
                <p className="text-gray-300">Dateien hochladen oder klicken zum auswählen.</p>
            </div>
        </div>
    )

    return (
        <div className="flex items-center justify-center w-full border-2 rounded-md border-gray-200 border-dashed">
            <div {...getRootProps({ className: 'dropzone w-full' })}>
                <input {...getInputProps()} />
                <div className="flex items-center justify-center gap-6 p-7 cursor-pointer w-full">
                    <span className="text-gray-200"><UploadCloud size={60} /></span>
                    <p className="text-gray-300">Dateien hochladen oder klicken zum auswählen.</p>
                </div>
            </div>
        </div>
    );
};

export default FileDropzone;
