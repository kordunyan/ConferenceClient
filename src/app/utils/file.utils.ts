export class FileUtils {

    public static getExtension(fileName: string): string {
        if (!fileName) {
            return '';
        }
        return fileName.substr(fileName.lastIndexOf('.') + 1);
    }

}
