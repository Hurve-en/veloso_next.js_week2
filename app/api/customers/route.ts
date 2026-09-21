import { NextResponse } from "next/server"; // used for sending JSON data

//temporary server-side data
const COSTUMERS = [
  {
    id: "c1",
    name: "Hurveen",
    balance: 300,
    lastpaid: "June 17",
  },

  {
    id: "c2",
    name: "Kendall",
    balance: 150,
    lastpaid: "December 20",
  },

  {
    id: "c3",
    name: "Bethoven",
    balance: 450,
    lastpaid: "May 3",
  },
];

//this is the Api end point to send the "COSTUMERS" data when someone requests it
export async function GET() {
  return NextResponse.json(COSTUMERS);
}
