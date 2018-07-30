all:
	mkdir -p ../img
	rm -rf ../img/*
	cp -vu img/*png ../img/
	cp -vu img/*svg ../img/
	mkdir -p ../pic
	rm -rf ../pic/*
	./mkpictt
	cp -vu pic/*png ../pic/
	cp -vu pic/*jpg ../pic/
	mkdir -p ../sw
	rm -rf ../sw/*
	./mkswtt
	cp -vu sw/*deb sw/*rpm sw/*gz sw/*brd sw/*sch ../sw/
	mkdir -p ../fonts
	rm -rf ../fonts/*
	cp -R fonts ..
	cp onerng.css ..
	cp diceimg.js ..
	cp README.md ..
	cp CNAME ..
	ttree -f ttreerc

