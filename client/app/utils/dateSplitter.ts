export const dateSplitter = (inputDate: string) => {
    let dat = new Date(inputDate);       
    let rezDat:string = `${dat.getFullYear()}-${dat.getMonth()}-${dat.getDate()}`;
    return rezDat === "NaN-NaN-NaN" ? "no key" : rezDat;
}
