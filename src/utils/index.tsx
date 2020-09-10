
import moment from "moment";

interface IDeath {
    "new": string;
    "1M_pop": string;
    "total": number;
}
interface ITests {
    "1M_pop": string,
    "total": number
}

interface ICases {
    "new": string
    "active":number
    "critical":number
    "recovered":number
    "1M_pop":string
    "total":number
}

interface ICountry {
    "continent": string,
    "country": string,
    "population": number,
    "cases": {
        "new": string,
        "active": number,
        "critical": number,
        "recovered": number,
        "1M_pop": string,
        "total": number
    },
    "deaths": IDeath,
    "tests": ITests,
    "day": string,
    "time": string
}

interface IResault {
    key: number,
    continent: string,
    country: string,
    day: string,
    population: string,
    time: string,
    data: {
        deaths: IDeath,
        tests: ITests,
        cases: ICases
    }
}
export const updateCountryList = (countryList: Array<ICountry>) => {
    let result: Array<IResault> = [];
    countryList.forEach((elem: any, index: any) => {
        result.push({
            key:index,
            continent: elem.continent,
            country: elem.country,
            day: moment(elem.day).format('DD-MM-YY'),
            population: elem.population,
            time: moment(elem.time).format('HH:mm'),
            data: {
                deaths: elem.deaths,
                tests: elem.tests,
                cases: elem.cases
            }
        })
    });
    return result;
};

export const SeachSuggestions = ()=> {
    // {value: "asdasd1"}
};
export const TableConfig = {
    searchTableColumns : [
        {
            title: 'Continent',
            dataIndex: 'continent',
            key: 'continent',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Population',
            dataIndex: 'population',
            key: 'population',
        },
        {
            title: 'Day',
            dataIndex: 'day',
            key: 'day',
        },
        {
            title: 'time',
            dataIndex: 'time',
            key: 'time',
        }
    ],
    testTableColumns : [
        {
            title: 'Tests/1 million population ',
            dataIndex: '1M_pop',
            key: '1M_pop',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        }
    ],
    deathTableColumns : [
        {
            title: ' Death / 1  million population',
            dataIndex: '1M_pop',
            key: '1M_pop',
        },
        {
            title: 'New',
            dataIndex: 'new',
            key: 'new',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        }
    ],
    CasesTableColumns : [
        {
            title: 'Cases/1 million population ',
            dataIndex: '1M_pop',
            key: '1M_pop',
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
        },
        {
            title: 'Critical',
            dataIndex: 'critical',
            key: 'critical',
        },
        {
            title: 'New',
            dataIndex: 'new',
            key: 'new',
        },
        {
            title: 'Recovered',
            dataIndex: 'recovered',
            key: 'recovered',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        }
    ]
};


