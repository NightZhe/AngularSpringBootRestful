export class DailyTranctionStockData {
    Code: string;
    Name: string;
    TradeVolume: number;
    TradeValue: number;
    OpeningPrice: number;
    HighestPrice: number;
    LowestPrice: number;
    ClosingPrice: number;
    Change: number;
    Transaction: number;
    constructor(
        Code: string,
        Name: string,
        TradeVolume: number,
        TradeValue: number,
        OpeningPrice: number,
        HighestPrice: number,
        LowestPrice: number,
        ClosingPrice: number,
        Change: number,
        Transaction: number
    ) {
        this.Code = Code;
        this.Name = Name;
        this.TradeVolume = TradeVolume;
        this.TradeValue = TradeValue;
        this.OpeningPrice = OpeningPrice;
        this.HighestPrice = HighestPrice;
        this.LowestPrice = LowestPrice;
        this.ClosingPrice = ClosingPrice;
        this.Change = Change;
        this.Transaction = Transaction;
    }


}   