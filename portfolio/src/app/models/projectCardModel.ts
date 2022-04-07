import { LinkInfoModel } from "./linkInfoModel";

export class projectCardModel {
    imgSrc: string = '';
    languages: string[] = []
    title: string = '';
    description: string = '';
    reason: string = '';
    LinkInfo: LinkInfoModel[]|any = null;
    interestNumber: number = 0;
    year: string = '';
}