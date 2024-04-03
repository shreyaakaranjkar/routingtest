export interface Iproduct{
    pName: string;
    pId: string;
    pStatus: IpStatus;
    canReturn : 0 | 1;
}
export type IpStatus = "Progress" | "Dispatched" | "Delivered"