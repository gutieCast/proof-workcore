//To get the business information

const getBusiness = async (a: number, e: number, ub: string) => {
    const url = `http://workcore.net/apiv2/web/empresa/?a=${a}&e=${e}&ub=${ub}`;
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status} - ${response.statusText}`;
        throw new Error(message);
    }

    // To fetch a business
    const businessData = await response.json();
}

export { getBusiness }