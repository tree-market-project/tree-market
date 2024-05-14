Function Initialize() Uint64
10 IF EXISTS("OWNER") THEN GOTO 90
20 STORE("OWNER",ADDRESS_STRING(SIGNER()))
30 SEND_ASSET_TO_ADDRESS(SIGNER(),1,SCID())
90 RETURN 0
End Function

Function UpdateVar(key String, value String, t String) Uint64
5 IF notOwner() THEN GOTO 90
10 IF t == "U" THEN GOTO 30
20 STORE(key,value)
25 RETURN 0
30 STORE(key,ATOI(value))
35 RETURN 0
90 RETURN 1
End Function

Function DelVar(key String) Uint64
5 IF notOwner() THEN GOTO 90
10 DELETE(key)
20 RETURN 0
90 RETURN 1
End Function

Function Deposit(asset String) Uint64
10 add("treasury"+asset,ASSETVALUE(HEXDECODE(asset)))
20 RETURN 0
End Function

Function Withdraw(asset String, amount Uint64) Uint64
10 IF notOwner() THEN GOTO 90
20 SEND_ASSET_TO_ADDRESS(SIGNER(),amount,HEXDECODE(asset))
30 RETURN 0
90 RETURN 1
End Function

Function notOwner() Uint64
10 IF SIGNER() == ADDRESS_RAW(LOAD("OWNER")) THEN GOTO 90
20 IF ASSETVALUE(SCID()) == 1 THEN GOTO 80
30 RETURN 1
80 SEND_ASSET_TO_ADDRESS(SIGNER(),1,SCID())
90 RETURN 0
End Function

Function add(k String, v Uint64) Uint64
10 IF EXISTS(k) THEN GOTO 30
15 STORE(k,v)
20 RETURN(LOAD(k))
30 STORE(k,LOAD(k)+v)
35 RETURN LOAD(k)
End Function