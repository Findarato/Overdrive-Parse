import cgi
from twill.commands import *
from BeautifulSoup import BeautifulSoup
import simplejson as json
import sys
import re

data1 = "No results found"
data2 = "No results found"
holds = "0"
agent('Mozilla/5.0 (X11; Linux i686; rv:11.0) Gecko/20100101 Firefox/11.0')
#isbn = 'http://incolsa.lib.overdrive.com/ContentDetails.htm?ID=A747D620-96F9-42BC-B4E1-4830EC9D3C9E'
#isbn = "9781781102534"
b = get_browser()
isbn = sys.argv[1]

if not isbn:
	isbn = ""
else:
	if len(isbn) > 13: #this should be a direct link to the content 
		isbn = cgi.escape(isbn)
		b.go(isbn)
		soup = BeautifulSoup(b.get_html())
	else: # a normal ISBN link
		isbn = cgi.escape(isbn)   # Escape the user input to avoid script injection attacks
		b.go("http://incolsa.lib.overdrive.com/")
		formvalue("2", "FullTextCriteria", isbn)
		submit()
		soup = BeautifulSoup(b.get_html())
		
	if soup.find(text='no results were found'):#Get the Copies that are accessable
		data1 = "No results found"
		data2 = "No results found"
		holds = "0"
	else:
		if soup.find(text='Available copies:'):

			data1 = soup.find(text='Available copies:')
			data1 = data1.findNext('noscript')
			holds = data1.findPreviousSiblings()			
			holds = holds[0].renderContents()

			holds = re.search('m#szNumWaiting\s*=\s*"(\d+)"#',holds)
			print holds
			data1 = data1.contents[0]
			data1 = data1.replace(' ','')

		if soup.find(text='Library copies:'):#Get the Total Copies that are avalable to the library
			data2 = soup.find(text='Library copies:')
			data2 = data2.findNext('noscript')
			data2 = data2.contents[0]
			data2 = data2.replace(' ','')

#print holds
#print data2
print json.dumps({"isbn":isbn,"available":data1,"library":data2,"holds":holds})
