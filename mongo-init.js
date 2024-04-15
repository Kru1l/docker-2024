db.createUser(
    {
        user: 'kru1l',
        pwd: 'just1',
        roles: [
            {
                role: 'readWrite',
                db: 'mongo-db-2024'
            }
        ]
    }
);