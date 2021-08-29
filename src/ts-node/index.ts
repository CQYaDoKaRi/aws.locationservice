import express from "express";
const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CROS
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

app.listen(4001, () => {
	console.log("Start port[4001]");
});
