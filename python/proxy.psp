<%
import cgi
from twill.commands import *
from BeautifulSoup import BeautifulSoup
data1 = "No results found"
data2 = "No results found"
agent('Mozilla/5.0 (X11; Linux i686; rv:11.0) Gecko/20100101 Firefox/11.0')
isbn = form.getfirst('isbn')

if not isbn:
	isbn = ""
else:
	if len(isbn) > 13: #this should be a direct link to the content 
		isbn = cgi.escape(isbn)
		go(isbn)
		soup = BeautifulSoup(show())
	else: # a normal ISBN link
		isbn = cgi.escape(isbn)   # Escape the user input to avoid script injection attacks
		go("http://incolsa.lib.overdrive.com/")
		fv("2", "FullTextCriteria", isbn)
		submit()
		soup = BeautifulSoup(show())
		
	if soup.find(text='no results were found'):#Get the Copies that are accessable
		data1 = "No results found"
		data2 = "No results found"
	else:
		if soup.find(text='Available copies:'):
			data1 = soup.find(text='Available copies:')
			data1 = data1.findNext('noscript')
			data1 = data1.contents[0]
			data1 = data1.replace(' ','')
		if soup.find(text='Library copies:'):#Get the Total Copies that are avalable to the library
			data2 = soup.find(text='Library copies:')
			data2 = data2.findNext('noscript')
			data2 = data2.contents[0]
			data2 = data2.replace(' ','')



		
%>
{"isbn":<%= isbn%>,"available":<%= data1%>,"library":<%= data2%>}
