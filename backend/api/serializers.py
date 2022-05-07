from rest_framework import serializers

class CommandSerializer(serializers.Serializer):
    MCC = serializers.IntegerField(required=False, allow_null=True)
    MNC = serializers.IntegerField(required=False, allow_null=True)
    CC = serializers.IntegerField(required=False, allow_null=True)
    CBA = serializers.IntegerField(required=False, allow_null=True)
    MGT = serializers.IntegerField(required=False, allow_null=True)
    NGT = serializers.IntegerField(required=False, allow_null=True)
    NRR = serializers.IntegerField(required=False, allow_null=True)
    CAMELversion = serializers.IntegerField(required=False, allow_null=True)
    MAPversion = serializers.IntegerField(required=False, allow_null=True)
    SCCPRPLMN = serializers.IntegerField(required=False, allow_null=True)
    camelchecked = serializers.BooleanField(required=False, allow_null=True)
    stpchecked = serializers.BooleanField(required=False, allow_null=True)
    IMSIList = serializers.ListField(required=False, allow_null=True)
