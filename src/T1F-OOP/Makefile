clean:
	rm -rf *~ basura b i
	find . -name '*~' -exec rm {} \;
	find . -name basura -exec rm {} \;

push:
	rm *~
	git pull 
	git add . 
	git commit -m "Minor fixes" 
	git push
