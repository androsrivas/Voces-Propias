const FileInput = ( { file, setFile}) => {
    return (
        <input
        type="file"
        file={file}
        onChange={setFile}
        className="FileInput-class"
        />
    )
}
export default FileInput;