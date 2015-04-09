all:
	mkdir -p ../img
	rm -f ../img/*
	cp -vu img/*png ../img/
	cp -vu img/*svg ../img/
	mkdir -p ../pic
	rm -f ../pic/*
	./mkpictt
	cp -vu pic/*png ../pic/
	cp -vu pic/*jpg ../pic/
	mkdir -p ../sw
	rm -f ../sw/*
	cp -vu sw/* ../sw/
	mkdir -p ../fonts
	rm -rf ../fonts/*
	cp -R fonts ..
	cp onerng.css ..
	cp diceimg.js ..
	cp README.md ..
	cp CNAME ..
	ttree -f ttreerc

