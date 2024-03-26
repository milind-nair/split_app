export type User = {
    Id: Number,
    Name: String,
    EmailId : String
}
export type Balance = Number

export enum Currency  {
    USD,
    INR
}

export type Group = {
    UsersList : Map <User,Balance>
    Currency :  Currency
}
export type Split = {
    MoneyPaid : Map<User, Number>,
    MoneyOwed : Map<User, Number>,
    TotalAmount : Number
}