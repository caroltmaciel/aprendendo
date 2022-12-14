def remove(listaDeFrutas, frutaASerRemovida):
	if listaDeFrutas.head.data == frutaASerRemovida:
		listaDeFrutas.head = listaDeFrutas.head.nextItem
	else:
		anterior = None

	frutaAtual = listaDeFrutas.head
	
    while frutaAtual != None and frutaAtual.data != frutaASerRemovida:
		anterior = frutaAtual
		frutaAtual = frutaAtual.nextItem
		
        if frutaAtual != None:
			anterior.nextItem = frutaAtual.nextItem
		else:
			anterior.nextItem = None