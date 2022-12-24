export default class Converters {
  apiDateFormater(date: string): string {
    let receivedDate = date;
    let year = receivedDate.slice(0, 4);
    let month = receivedDate.slice(4, 6);
    let day = receivedDate.slice(6, 8);
    return `${day}/${month}/${year}`;
  }

  localDateFormater(date: string): string {
    let receivedDate = date.toString();
    let year = receivedDate.slice(0, 4);
    let month = receivedDate.slice(5, 7);
    let day = receivedDate.slice(8, 10);
    return `${day}/${month}/${year}`;
  }

  kilometrageFormater(kilometrage: string): string {
    let kilomeDescription = kilometrage;
    switch (kilometrage) {
      case "1":
        kilomeDescription = "0 t/m 7500 KM";
        break;
      case "2":
        kilomeDescription = "7501 t/m 10000 KM";
        break;
      case "3":
        kilomeDescription = "10001 t/m 12000 KM";
        break;
      case "4":
        kilomeDescription = "12001 t/m 15000 KM";
        break;
      case "5":
        kilomeDescription = "15000 t/m 20000 KM";
        break;
      case "6":
        kilomeDescription = "20001 t/m 25000 KM";
        break;
      case "7":
        kilomeDescription = "25001 t/m 30000 KM";
        break;
      case "8":
        kilomeDescription = "30001 t/m 90000 KM";
        break;
      default:
        break;
    }
    return kilomeDescription;
  }
}
