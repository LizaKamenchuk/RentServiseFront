export class PhotoResponse {
  fileId: string | undefined;
  fileName: string|undefined;
  fileBytes: string | undefined;

  constructor(fileId?: string, fileName?: string,fileBytes?: string ) {
    this.fileId  = fileId;
    this.fileName  = fileName;
    this.fileBytes = fileBytes;
  }

}
