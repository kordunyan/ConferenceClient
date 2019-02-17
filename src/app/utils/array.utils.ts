export class ArrayUtils {

    public static isEmpty(array: any[]): boolean {
        return !array || !array.length;
    }

    public static isNotEmpty(array: any[]): boolean {
        return !ArrayUtils.isEmpty(array);
    }

}