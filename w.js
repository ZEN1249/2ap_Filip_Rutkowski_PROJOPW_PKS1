class Database {
    connect() { console.log("Connected"); } // Klasa do połączenia z bazą danych
}

class UserService {
    constructor(database) { this.database = database; } // Wstrzykiwanie zależności
    save() { this.database.connect(); } // Używanie zależności do zapisu
}

const db = new Database(); // Tworzenie obiektu bazy danych
const userService = new UserService(db); // Wstrzykiwanie zależności
userService.save(); // Połączenie z bazą danych: Connected
