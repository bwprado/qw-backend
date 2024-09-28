/**
 * @class Stats
 */
export class Stats {
    /** @type {string} */
    static API_URL = 'https://quakeworld.com.br/api/stats'

    /**
     * @param {string} input
     * @returns {string[]}
     */
    static processString(input) {
        const result = []
        const length = input.length

        for (let i = 1; i < length - 1; i++) {
            if (input[i] === '\\' && input[i + 1] === 'u') {
                // If it starts with \u, take the next 4 characters
                result.push(input.substring(i, i + 6))
                i += 5 // Skip the next 5 characters (including \uXXXX)
            } else {
                // Otherwise, take the single character
                result.push(input[i])
            }
        }

        return result
    }

    /**
     * @param {string} name
     * @returns {string}
     */
    static parseName(name) {
        // Character mapping array
        const charMap = [
            ['•', '', '', '', '', '•', '', '', '', '', '', '', '>', '>', '•', '•'],
            ['[', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '•', '-', '-', '-'],
            [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/'],
            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?'],
            ['@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
            ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_'],
            ["'", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
            ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '{', '|', '}', '~', ' '],
            ['(', '=', ')', '.', '.', '.', '.', '.', '.', '.', '.', '.', '>', '>', '•', '•'],
            ['[', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '•', '-', '-', '-'],
            [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/'],
            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?'],
            ['@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
            ['P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_'],
            ['`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
            ['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', ' '],
        ]

        let nick = ''
        for (let i = 0; i < name.length; i++) {
            if (name[i] === '\\' && name[i + 1] === 'u') {
                const row = parseInt(name.slice(i + 2, i + 4), 16)
                const column = parseInt(name.slice(i + 4, i + 6), 16)
                nick += charMap[row][column]
                i += 5 // Skip the next 5 characters (including \uXXXX)
            } else {
                nick += name[i]
            }
        }

        return nick
    }

    /**
     * @param {object} data
     * @returns {object}
     */
    static parseData(data) {
        if (!data.hasOwnProperty('players')) {
            return data
        }

        for (let i = 0; i < data['players'].length; i++) {
            const player = data['players'][i]
            const playerName = JSON.stringify(player['name'])
            const nameData = this.processString(playerName)
            data['players'][i]['name'] = this.parseName(nameData.join(''))

            if (player.hasOwnProperty('team')) {
                const teamName = JSON.stringify(player['team'])
                const teamData = this.processString(teamName)
                data['players'][i]['team'] = this.parseName(teamData.join(''))
            }
        }

        return data
    }

    /**
     * @param {string} filePath
     * @returns {string|null}
     */
    static parseFile(filePath) {
        // Read the content of the file
        const jsonContent = fs.readFileSync(filePath, 'utf8')

        // Convert the JSON content to an associative array
        let dataArray
        try {
            dataArray = JSON.parse(jsonContent)
        } catch (error) {
            this.log('Error: Invalid JSON format')
            return null
        }

        const dataParsed = this.parseData(dataArray)
        if (this.hasBots(dataParsed)) {
            this.log('Error: Match with bots')
            return null
        }

        return JSON.stringify(dataParsed)
    }

    /**
     * @param {object} dataParsed
     * @returns {boolean}
     */
    static hasBots(dataParsed) {
        for (const player of dataParsed['players']) {
            if (player.hasOwnProperty('bot')) {
                return true
            }
        }
        return false
    }

    /**
     * @param {string} folderPath
     * @param {string} doneFolder
     * @param {string} apiUrl
     * @returns {void}
     */
    static readAndSendTxtFiles(folderPath, doneFolder, apiUrl) {
        // Ensure folder paths have trailing slashes
        folderPath = folderPath.endsWith('/') ? folderPath : `${folderPath}/`
        doneFolder = doneFolder.endsWith('/') ? doneFolder : `${doneFolder}/`

        // Check if the folder exists
        if (!fs.existsSync(folderPath)) {
            throw new Error('Error: Folder not found.')
        }
    }
}
