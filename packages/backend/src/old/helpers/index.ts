const MAIN_TOKEN = 'Pickle'

export function calculateAggregate(projectData: any) {
    const [smallestDate, greatestDate] = findDateRange(projectData.byProject)

    fillAllDates(projectData.byProject, [smallestDate, greatestDate])
    const dataLength = projectData.byProject[MAIN_TOKEN].aggregate.data.length

    console.log('Here I am....')
    const aggregate = {
        data: [],
        types: ['date', 'usd', 'eth']
    }

    for (let i = 0; i < dataLength; i++) {
        const date = projectData.byProject[MAIN_TOKEN].aggregate.data[i][0]
        let usd = 0, eth = 0
        Object.keys(projectData.byProject).forEach(key => {

            usd += projectData.byProject[key].aggregate.data[i][1]
            eth += projectData.byProject[key].aggregate.data[i][2]
        })

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        aggregate.data.push([date, usd, eth])
    }

    return aggregate
}

function findDateRange(byProject: any) {
    let smallestDate = new Date('2099-01-01')
    let greatestDate = new Date('1800-01-01')
    Object.keys(byProject).forEach(key => {
        if (byProject[key].aggregate.data[0][0] < smallestDate) {
            smallestDate = byProject[key].aggregate.data[0][0]
        }

        if (byProject[key].aggregate.data[0][0] > greatestDate) {
            greatestDate = byProject[key].aggregate.data[0][0]
        }
    })
    return [smallestDate, greatestDate]
}

function fillAllDates(byProject: any, [smallestDate, greatestDate]: Array<Date>) {
    const today = new Date()

    Object.keys(byProject).forEach(key => {
        const smallDateCopy = new Date(smallestDate)
        const project = byProject[key]
        const newData = []
        let previousTvlValue = 0

        while (smallDateCopy < today) {
            const date = smallDateCopy.toString()
            const found = project.aggregate.data.find((x: any) => formatDate(x[0]) === formatDate(date))
            if (found) {
                if (typeof found[0] === "object") {
                    found[0] = formatDate(found[0])
                }
                previousTvlValue = found[1]
                newData.push(found)
            } else {
                newData.push([formatDate(date), previousTvlValue, 0])
            }
            smallDateCopy.setDate(new Date(smallDateCopy).getDate() + 1)
        }
        project.aggregate.data = newData
    })

    return byProject
}

// function formatDate(date: any) {
//     return new Date(date)
//         .toLocaleDateString('nl', {year: "2-digit", month: "2-digit", day: "2-digit"})
// }

export function formatDate(date: any) {
    const d = new Date(date), year = d.getFullYear();
    let month = '' + (d.getMonth() + 1), day = '' + d.getDate()

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
