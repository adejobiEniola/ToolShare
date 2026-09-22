## What it is?

A simple tool lending tracker for workshops to help prevent borrowed tools from getting lost.

## Who is it for?

David, a busy workshop carpenter who lends expensive power tools to apprentices and neighboring artisans, then forgets who has what.

## What one job?

Help David keep track of who has each borrowed tool.

## Smallest version?

David can log in, record a tool loan, view outstanding loans, edit loan details, and mark a tool as returned.

## The screens

1. Authentication - signup with email and password, login, forgot password, and password reset through an email link. Logout returns the user to login.

2. Dashboard - shows only tool name, borrower name, expected return date, and status. Includes an Add Loan button, filters, and access to returned loan history.

3. Add / Edit Loan - enter or update the tool name, borrower name, phone number, and expected return date.

4. Loan Details - shows tool name, borrower name, phone number, borrowing date, expected return date, status, and return date if returned. Unreturned loans show Edit Loan and Mark Returned buttons.

## What happens on each (userflows)

1. Login => Dashboard => Select a loan => Loan Details.

2. Login => Dashboard => Add Loan => Save => Loan Details.

3. Loan Details => Edit Loan => Save Changes => Loan Details.

4. Loan Details => Mark Returned => Confirm => Record moves to returned loan history.

5. Dashboard => Filter by status and/or expected return date => Select a loan.

6. Logout => Login.

## What is done?

It is done when David can record a loan, find who has the tool, update the details, mark it returned, and find that record in history after logging in again.

## What it will not do

1. No peer-to-peer rental marketplace (never).

2. No payment or caution fee collection (never).

3. No automated SMS or WhatsApp reminders (not yet).

4. No physical hardware or barcode scanner integration (not yet).

5. No native mobile app (not yet).

6. No GPS tracking tags for tools (never).

7. No tool repair or maintenance logs (not yet).

8. No separate tool inventory or borrower directory (not yet).

9. No borrower accounts or staff roles (not yet).

## What it is called

ToolLocker

<!-- ## Notes

- One workshop owner per account. Each owner sees only their own records.

- The website should work on both phone and laptop browsers.

- Tool names are typed manually, e.g. "Angle Grinder 1".

- Different physical tools should have distinct names, but the app does not need to enforce unique tool names.

- Each loan requires a tool name, borrower name, phone number, and expected return date.

- Required text fields cannot be empty or contain only spaces.

- No special maximum text lengths are needed beyond sensible normal input limits.

- Phone numbers are entered manually. No SMS verification or strict phone-number validation is needed.

- The borrowing date is recorded automatically and cannot be edited.

- Borrowing date, expected return date, and actual return date are stored and shown as dates only, not times.

- All date rules use Africa/Lagos time.

- For a new loan, the expected return date must be today or later.

- Editing updates the same loan record. The expected return date may be changed, including to a past date.

- No edit-history feature is needed.

- The dashboard initially shows all unreturned loans, including overdue ones.

- Statuses are Borrowed, Overdue, and Returned.

- Borrowed means the loan has not been returned and its expected return date has not passed.

- Overdue means the loan has not been returned and its expected return date has passed.

- A tool due today becomes overdue tomorrow.

- The status filter can show All Outstanding, Borrowed, Overdue, or Returned.

- All Outstanding means Borrowed and Overdue loans together.

- The optional date filter matches one exact expected return date and can be cleared.

- If status and date filters are both selected, the loan must match both.

- Outstanding loans are sorted by expected return date, earliest first.

- Returned loans are sorted by actual return date, newest first.

- The dashboard only shows tool name, borrower name, expected return date, and status. Phone number and borrowing date are shown only on Loan Details.

- Mark Returned asks for confirmation before completing the action.

- The confirmation can simply ask: "Mark this tool as returned?"

- Mark Returned records today's date automatically and changes the status to Returned.

- Returned records remain in history and are read-only.

- Returned Loan Details hide the Edit Loan and Mark Returned buttons instead of disabling them.

- Lending a returned tool again creates a new loan record.

- No delete, reopen, advanced search, or extra reporting features.

- Use the course's provided technology setup for authentication and saved data. Do not introduce a custom server or another backend technology.

- If the existing setup does not make the authentication or saved-data technology clear, ask instead of guessing.

- Records must remain saved after logout.

- Offline use is outside this version.

-->
