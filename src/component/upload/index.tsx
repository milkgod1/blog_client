import React, { useCallback, useState } from 'react';
import { RcFile, UploadProps } from 'antd/es/upload';
import { message, Upload } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload/interface';
import { UploadFile } from 'antd/es/upload/interface';
import { PlusOutlined } from '@ant-design/icons';

export type UploadFunction = UploadProps['customRequest'];
interface UploadPictureProps {
  customUpload: UploadFunction;
}

const UploadPicture = ({ customUpload }: UploadPictureProps) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const beforeUpload = useCallback((file: RcFile) => {
    const isPictureFormatRight =
      file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isPictureFormatRight) {
      message.error('You must upload a png or jpg format picture');
    }
    const size = file.size / 1024 / 1024 <= 2;
    if (!size) {
      message.error('Image size must be smaller than 2MB');
    }
    return isPictureFormatRight && size;
  }, []);

  const onUpload = (info: UploadChangeParam) => {
    const file = info.file;
    if (file.status === 'done') {
      if (file.originFileObj) {
        setFileList([file.originFileObj]);
      }
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Upload
      name="cover"
      listType="picture-card"
      fileList={fileList}
      beforeUpload={beforeUpload}
      onChange={onUpload}
      onRemove={() => {
        setFileList([]);
        return true;
      }}
      maxCount={1}
      customRequest={customUpload}
    >
      {fileList.length > 0 ? null : uploadButton}
    </Upload>
  );
};

export default UploadPicture;
