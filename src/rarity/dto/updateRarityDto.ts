import { RarityName } from "@prisma/client"

export class updateRarityDTO {
    name?: RarityName
    probability?: number
}