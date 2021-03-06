export class Note {
    Date: string;
    ExperienceSchemaID: string;
    CalendarID: string;
    InternshipID: string;
    Headline: string;
    ID: string;
    Text: string;
    UserID: string;

    constructor(date: string, experienceSchemaID: string, calendarID: string, internshipID: string,
        headline: string, id: string, text: string, userID: string) {
        this.Date = date;
        this.ExperienceSchemaID = experienceSchemaID;
        this.CalendarID = calendarID;
        this.InternshipID = internshipID;
        this.Headline = headline;
        this.ID = id;
        this.Text = text;
        this.UserID = userID;
    }
}