import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

function ImageUploaderModal() {
	return (
		<FileUploaderRegular
			sourceList="local, camera, facebook, gdrive"
			cameraModes="photo"
			classNameUploader="uc-light"
			pubkey="3740c4ddeac1e86d2a2c"
		/>
	);
}

export default ImageUploaderModal;