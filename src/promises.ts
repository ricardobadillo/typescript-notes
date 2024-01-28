(async() => {
    function delay(time: number): Promise<boolean> {
        const promise = new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });

        console.log("Promesa creada... Esperando 3 segundos...");

        return promise;
    }

    const response: boolean = await delay(3000);
    console.log(response);
})();