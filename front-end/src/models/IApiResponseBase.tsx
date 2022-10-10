interface IApiResponseBase {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: boolean;
}
export default IApiResponseBase;
