const {createLogger, format, transports} = require("winston")

module.exports = createLogger({
    transports : [
        // logging to console
        new transports.Console({
            level: "warn"
        }),

        // loggig error to a file
        new transports.File({
        filename: "logs/server.log",
        format: format.combine(
            format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            format.align(),
            format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
        )
    }),

        // logging errors to a database
        

    ]
})

