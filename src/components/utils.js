export function updateData(featureCollection, data) {
    const {features} = featureCollection; // why this works
    return {
        type: 'FeatureCollection',
        features: features.map(f => {
        let state = data[f.id].state;
        let actual = data[f.id].actualsTimeseries;
        // let cases = actual.cases;
        // let deaths = actual.deaths;
        // let date = data[f.id].lastUpdatedDate;
        const properties = {
            ...f.properties,
            state,
            geo: f
        };
        return {...f, properties, data: actual};
        }),
        withData: true
    };
}