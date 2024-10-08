def factorial(n: int) -> int:
    """Compute the factorial of a non-negative integer n."""
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    numbers = list(range(2, n + 1))
    result = 1
    for number in numbers:
        result *= number
    return result
