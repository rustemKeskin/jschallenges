class Meetup {
    constructor(year, month) {
        this.year = year;
        this.month = month;
    }

    day(weekday, schedule) {
        let daysOfWeek = {
            'Monday': 1,
            'Tuesday': 2,
            'Wednesday': 3,
            'Thursday': 4,
            'Friday': 5,
            'Saturday': 6,
            'Sunday': 0
        };
        let dayOfWeek = daysOfWeek[weekday];
        let date = new Date(this.year, this.month - 1, 1);
        let firstDayOfWeek = date.getDay();
        let diff = dayOfWeek - firstDayOfWeek;
        if (diff < 0) {
            diff += 7;
        }
        if (schedule === 'teenth') {
            while (date.getDate() < 13) {
                date.setDate(date.getDate() + 1);
            }
            while(date.getDay() !== dayOfWeek) {
                date.setDate(date.getDate() + 1);
            }
        } else if (schedule === 'last') {
            date.setMonth(date.getMonth() + 1);
            date.setDate(0);
            while (date.getDay() !== dayOfWeek) {
                date.setDate(date.getDate() - 1);
            }
        } else {
            diff += 7 * (scheduleMap[schedule] - 1);
            date.setDate(date.getDate() + diff);
        }
        return date;
    }
}

const scheduleMap = {
    'first': 1,
    'second': 2,
    'third': 3,
    'fourth': 4,
    'fifth': 5
};

module.exports = Meetup