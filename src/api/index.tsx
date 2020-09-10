import {updateCountryList} from '../utils';

interface Iparams {
    url: string;
    searchParam: Array<{name:string,value:string}>;
    errCallback: (arg: boolean) => void;
}

const getRequest = (params: Iparams) => {
    let paramsString = '';
    params.searchParam.forEach((elem) => {
        paramsString = paramsString.concat(params.searchParam.length>1 ? `${elem.name}=${elem.value}&&`:`${elem.name}=${elem.value}`)
    });
    return fetch(`${params.url}?${paramsString}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "a23e76b398mshf7a80027655c392p1bea5fjsn093dcd8ceede"
        }
    })
        .then(response => response.json())
};

export const getStatistics = async (countryName: string, successCallback: (arg: any) => void, errCallback: (arg: boolean) => void) => {
    try {
        const countries = await getRequest({
            url: 'https://covid-193.p.rapidapi.com/statistics',
            searchParam: [{name:'country', value:countryName}],
            errCallback: errCallback
        });
        return successCallback(updateCountryList(countries.response));
    } catch (e) {
        errCallback(true)
    }
};

export const getCountries = async (serachvalue:string,successCallback: (arg: any) => void, errCallback: (arg: boolean) => void) => {
    try {
        const countries = await getRequest({
            url: 'https://covid-193.p.rapidapi.com/countries',
            searchParam:[{name:'search', value: serachvalue}],
            errCallback: errCallback
        });
        return successCallback(countries.response);
    } catch (e) {
        errCallback(true)
    }
};

export const getHistory = async (countryName: string, successCallback: (arg: any) => void, errCallback: (arg: boolean) => void, dateRequest:string) => {
    try {
        const countries = await getRequest({
            url: 'https://covid-193.p.rapidapi.com/history',
            searchParam: [
                {
                    name: 'country',
                    value: countryName
                },
                {
                    name: 'day',
                    value: dateRequest
                }
            ],
            errCallback: errCallback
        });
        return successCallback(updateCountryList(countries.response));
    } catch (e) {
        errCallback(true)
    }
};