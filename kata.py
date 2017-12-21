def tribonacci(signature, n):
    #your code here
    trib=signature
    while n>len(trib):
        print('dsfds')
        nex=trib[-3]+trib[-2]+trib[-1]
        trib.append(nex)
        
    print(trib)

tribonacci([1,1,1],10)