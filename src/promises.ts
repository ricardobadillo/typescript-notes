(async() => {
    function delay(time: number): Promise<boolean> {
        const promise = new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });

        return promise;
    }

    const response: boolean = await delay(3000);
    console.log(response);
})();