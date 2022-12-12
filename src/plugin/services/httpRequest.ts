import axios from "axios";

type Car = [];

type TypeGetCars = {
  data: Car[];
};

export default class HttpRequest {
  async getCars(licence: string): Promise<unknown> {
    try {
      const licenceCar = licence;

      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<TypeGetCars>(
        `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${licenceCar}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      // console.log(JSON.stringify(data, null, 4));

      // 👇️ "response status is: 200"
      console.log("response status is: ", status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
}
