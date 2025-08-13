import moment from 'moment'

export const printDate = (date: Date) => {
    return moment(date).format('YYYY-MM-DD')
}

export const printDateDDMMYYYY = (date: string) => {
    const mDate = moment(date)
    return mDate.isValid() ? mDate.format('DD.MM.YYYY') : ''
}

enum Cases {
    Nom,
    Gen = 0,
}


const monthsNamesCases = {
    0: {
        [Cases.Nom]: "январь",
        [Cases.Gen]: "января"
    },
    1: {
        [Cases.Nom]: "февраль",
        [Cases.Gen]: "февраля"
    },
    2: {
        [Cases.Nom]: "март",
        [Cases.Gen]: "марта"
    },
    3: {
        [Cases.Nom]: "апрель",
        [Cases.Gen]: "апреля"
    },
    4: {
        [Cases.Nom]: "май",
        [Cases.Gen]: "мая"
    },
    5: {
        [Cases.Nom]: "июнь",
        [Cases.Gen]: "июня"
    },
    6: {
        [Cases.Nom]: "июль",
        [Cases.Gen]: "июля"
    },
    7: {
        [Cases.Nom]: "август",
        [Cases.Gen]: "августа"
    },
    8: {
        [Cases.Nom]: "сентябрь",
        [Cases.Gen]: "сентября"
    },
    9: {
        [Cases.Nom]: "октябрь",
        [Cases.Gen]: "октября"
    },
    10: {
        [Cases.Nom]: "ноябрь",
        [Cases.Gen]: "ноября"
    },
    11: {
        [Cases.Nom]: "декабрь",
        [Cases.Gen]: "декабря"
    }
}

const printMonthName = (monthIndex: number, c: Cases = Cases.Nom) => {
    if (monthsNamesCases.hasOwnProperty(monthIndex)) {
        const monthNames = monthsNamesCases[monthIndex]
        return monthNames[c]
    }

    return ''
}

export const printPeriod = (startDate: string | null, endDate: string | null) => {
    const mStartDate = moment(startDate)
    const mEndDate = moment(endDate)

    if (!mStartDate.isValid() && !mEndDate.isValid()) {
        return ''
    } else if (mStartDate.isValid() && mEndDate.isValid) {
        if (mStartDate.isSame(mEndDate, 'day')) {
            return `${mStartDate.date()} ${printMonthName(mStartDate.month(), Cases.Gen)}`
        }else if (mStartDate.isSame(mEndDate, 'month')) {
            return `${mStartDate.date()}-${mEndDate.date()} ${printMonthName(mStartDate.month(), Cases.Gen)}`
        }

        return `${mStartDate.date()} ${printMonthName(mStartDate.month(), Cases.Gen)} - ${mEndDate.date()} ${printMonthName(mEndDate.month(), Cases.Gen)}`
    }
}

export const parseDate = (date: string): Date | null => {
    if (!date) {
        return null
    }

    const mDate = moment(date)
    return mDate.isValid() ? mDate.toDate() : null
}