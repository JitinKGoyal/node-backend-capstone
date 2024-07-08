import { networkInterfaces } from "os"

export const myIp = networkInterfaces()["Wi-Fi"].find(e => e.family == "IPv4").address