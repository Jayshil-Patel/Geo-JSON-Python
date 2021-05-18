# Geo-JSON-Python
>The first problem to solve is that the Google geocoding
>API is rate limited to a fixed number of requests per day.
>So if you have a lot of data you might need to stop and
>restart the lookup process several times.  So we break
>the problem into two phases.

>In the first phase we take our input data in the file (where.data) and read it one line at a time, and retrieve the
>geocoded response and store it in a database (geodata.sqlite).
>Before we use the geocoding API, we simply check to see if
>we already have the data for that particular line of input.

>You can re-start the process at any time by removing the file
>geodata.sqlite

>Run the geoload.py program.   This program will read the input
>lines in where.data and for each line check to see if it is already
>in the database and if we don't have the data for the location,
>call the geocoding API to retrieve the data and store it in the database.

## Contact Info
>[![Whats app link](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/918141487230)
>[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jayshil-patel-607819171/)
>[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/justchillll?igshid=csicrdof9bba)
>[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jayshil-Patel)
>[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jayshiljatin@gmail.com)
