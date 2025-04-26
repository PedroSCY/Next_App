import { NextResponse } from "next/server";


export function GET() {
    return NextResponse.json([
        { id: 1, destino: "Rio de Janeiro", preco: 3249.0, data: new Date() },
        { id: 2, destino: "São Paulo", preco: 3889.0, data: new Date() },  
        { id: 3, destino: "Paris", preco: 5242.0, data: new Date() },
        { id: 4, destino: "New York", preco: 6289.0, data: new Date() },
        { id: 5, destino: "Tokyo", preco: 7249.0, data: new Date() },
        { id: 6, destino: "London", preco: 4742.0, data: new Date() },
        { id: 7, destino: "Dubai", preco: 8279.0, data: new Date() },
        { id: 8, destino: "Sydney", preco: 9245.0, data: new Date() }
    ])
    
 
}