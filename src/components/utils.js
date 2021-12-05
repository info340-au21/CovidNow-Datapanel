export function updateData(featureCollection, data) {
    const {features} = featureCollection;
    return {
        type: 'FeatureCollection',
        features: features.map(f => {
        let state = data[f.id].state;
        let actual = data[f.id].actuals;
        let cases = actual.cases;
        let deaths = actual.deaths;
        let date = data[f.id].lastUpdatedDate;
        const properties = {
            ...f.properties,
            state,
            cases,
            deaths,
            date
        };
        return {...f, properties};
        })
    };
}