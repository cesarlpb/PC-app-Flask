def get_random_hash():
    import random
    hash = random.getrandbits(16)
    return hash.to_bytes(2, byteorder='big').hex()

def get_random_int():
    import random
    return random.randint(1, 100)