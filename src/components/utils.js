export function updateData(featureCollection, data) {
    const {features} = featureCollection; // why this works
    return {
        type: 'FeatureCollection',
        features: features.map(f => {
        let state = data[f.id].state;
        let actualsTimeseries = data[f.id].actualsTimeseries;
        let actual = data[f.id].actuals;
        let cases = actual.cases;
        let deaths = actual.deaths;
        let date = data[f.id].lastUpdatedDate;
        const properties = {
            ...f.properties,
            cases,
            deaths,
            state,
            date,
            geo: f
        };
        return { ...f, properties, data: actualsTimeseries };
        }),
        withData: true
    };
}