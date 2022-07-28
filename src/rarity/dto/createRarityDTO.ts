import { RarityName } from "@prisma/client"

export class createRarityDTO {
    name: RarityName
    probability: number
}