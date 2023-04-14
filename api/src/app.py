from datetime import datetime
from typing import Any

from fastapi import FastAPI, Form, status
from fastapi.responses import RedirectResponse

from services.database import JSONDatabase

app = FastAPI()

database: JSONDatabase[list[dict[str, Any]]] = JSONDatabase("data/database.json")

@app.on_event("startup")
def on_startup() -> None:
    if "posts" not in database:
        print("Adding posts entry to database")
        database["posts"] = []


@app.on_event("shutdown")
def on_shutdown() -> None:
    database.close()


@app.post("/quote")
def post_message(name: str = Form(), message: str = Form()) -> RedirectResponse:
    """
    Process a user submitting a new quote.
    You should not modify this function.
    """
    now = datetime.now().replace(microsecond=0)
    post = {
        "name": name,
        "message": message,
        "time": now.isoformat(),
    }
    database["posts"].append(post)

    return RedirectResponse("/", status.HTTP_303_SEE_OTHER)


# TODO: add another API route with a query parameter to retrieve quotes based on max age
@app.get("/get-quote")
def get_quote(maxAge: str):
    # get the current date object
    currentDay = datetime.now()
    quoteList = []
    # query == week, check each quoteObject and check if their date difference is 7 or less days (which is a week ago)
    if maxAge == "week":
        for obj in database["posts"]:
            objDay = datetime.fromisoformat(obj["time"])
            if (currentDay - objDay).days <= 7:
                quoteList.append(obj)
    # query == month, check each quoteObject and check if their date difference is 30 or less (which is approximately a month ago)
    elif maxAge == "month":
        for obj in database["posts"]:
            objMonth = datetime.fromisoformat(obj["time"])
            if (currentDay - objMonth).days <= 30:
                quoteList.append(obj)
    # query == year, check each quoteObject and check if their date difference is 365 or less (which a year ago)
    elif maxAge == "year":
        for obj in database["posts"]:
            objYear = datetime.fromisoformat(obj["time"])
            if (currentDay - objYear).days <= 365:
                quoteList.append(obj)
    # return all the quotes in a list
    elif maxAge == "all":
        return database["posts"]

    return quoteList


